/* eslint-disable @next/next/no-assign-module-variable */
import { NextRequest, NextResponse } from "next/server";

import { getLoggedInUser } from "@/lib/loggedin-user";
import { getLesson } from "@/queries/lessons";
import { getModuleBySlug } from "@/queries/modules";

import { Watch } from "@/model/watch-model";

const STARTED = "started";
const COMPLETED = "completed";

export async function POST(request) {
    const { courseId, lessonId, moduleSlug, state, lastTime } =
        await request.json();

    const lesson = await getLesson(lessonId);
    const loggedinUser = await getLoggedInUser();
    const module = await getModuleBySlug(moduleSlug);

    if (!loggedinUser) {
        return new NextResponse(`You are not authenticated.`, {
            status: 401,
        });
    }
    console.log(state);
    if (state !== STARTED && state !== COMPLETED) {
        return new NextResponse(`Invalid state. Can not process request.`, {
            status: 500,
        });
    }

    if (!lesson) {
        return new NextResponse(`Invalid lesson. Can not process request.`, {
            status: 500,
        });
    }

    const watchEntry = {
        lastTime,
        lesson: lesson.id,
        module: module.id,
        user: loggedinUser.id,
        state,
    };

    try {
        const found = await Watch.findOne({
            lesson: lessonId,
            module: module.id,
            user: loggedinUser.id,
        }).lean();

        if (state === STARTED) {
            if (!found) {
                watchEntry["created_at"] = Date.now();
                await Watch.create(watchEntry);
            }
        } else if (state === COMPLETED) {
            if (!found) {
                watchEntry["created_at"] = Date.now();
                await Watch.create(watchEntry);
            } else {
                if (found.state === STARTED) {
                    watchEntry["modified_at"] = Date.now();
                    await Watch.findByIdAndUpdate(found._id, {
                        state: COMPLETED,
                    });
                }
            }
        }
        return new NextResponse("Watch Record added Successfully.", {
            status: 200,
        });
    } catch (error) {
        console.error(error);
        return new NextResponse(error.message, {
            status: 500,
        });
    }
}

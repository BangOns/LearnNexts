import { connectToDB } from "@/utils/database";
import Prompt from "@/models/prompt";
// get

export const GET = async (request, { params }) => {
  try {
    await connectToDB();
    const prompts = await Prompt.findById(params.id).populate("creator");

    if (!prompts) {
      return new Response("Prompt not a found", { status: 404 });
    }
    return new Response(JSON.stringify(prompts), { status: 200 });
  } catch (error) {
    return new Response("Failed to get prompt", { status: 500 });
  }
};

// patch
export const PATCH = async (request, { params }) => {
  const { prompt, tag } = await request.json();
  try {
    await connectToDB();
    const existingPrompt = await Prompt.findById(params.id).populate("creator");
    if (!existingPrompt)
      return new Response("Prompt Not A Found !!", { status: 404 });

    existingPrompt.prompt = prompt;
    existingPrompt.tag = tag;

    await existingPrompt.save();
    return new Response(JSON.stringify(existingPrompt), { status: 200 });
  } catch (error) {
    return new Response("Failed to update prompt", { status: 500 });
  }
};
// delete
export const DELETE = async (request, { params }) => {
  try {
    await connectToDB();
    await Prompt.findByIdAndRemove(params.id);
    return new Response("Prompt deleted succesfully", { status: 200 });
  } catch (error) {
    return new Response("Failed to delete prompt", { status: 500 });
  }
};

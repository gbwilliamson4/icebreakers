"use client";

import axios, { AxiosResponse } from "axios";

import Question from "@/components/question";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ClimbingBoxLoader } from "react-spinners";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(0);
  const [question, setQuestion] = useState("");

  // const router = useRouter();

  async function pauseForTwoSeconds(): Promise<void> {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        resolve();
      }, 2000); // 2000 milliseconds = 2 seconds
    });
  }

  async function handlePress() {
    setLoading(true);
    // send request to get question
    const route: string = "/api/question";
    const response: AxiosResponse = await axios.get(route);
    const question = response.data;
    // console.log("question");
    // console.log(question);
    await pauseForTwoSeconds(); // pause for dramatic effect
    // update states
    setCount(count + 1);
    setQuestion(question);
    setLoading(false);
    // router.refresh();
  }

  // const count = 5;
  // const loading = true;
  // const question = "this is the question?";

  return (
    <main className='flex min-h-screen flex-col items-center justify-between md:p-24 py-24 px-8 bg-slate-300'>
      {/* <div className='md:container md:mx-auto content-center text-center drop-shadow-md hover:drop-shadow-xl bg-white rounded-md p-5'> */}
      <div className='md:container content-center text-center drop-shadow-md hover:drop-shadow-xl bg-white rounded-md p-5'>
        <h1 className='font-bold text-4xl py-5'>
          Random Icebreaker Question Generator v1.0
        </h1>
        <p className='py-5'>Press the button below to get a random question</p>
        <div className='pb-5'>Questions Generated: {count}</div>

        <div className='pb-5'>
          <Button
            className='bg-blue-500 hover:bg-blue-700'
            onClick={handlePress}
            disabled={loading}
          >
            Generate
          </Button>
          <div className='flex justify-center'>
            {loading ? <ClimbingBoxLoader /> : <Question question={question} />}
          </div>
        </div>
      </div>
    </main>
  );
}

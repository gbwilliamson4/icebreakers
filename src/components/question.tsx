"use client";

import React from "react";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useToast } from "@/components/ui/use-toast";

interface QuestionProps {
  question: string;
}

const Question = ({ question }: QuestionProps) => {
  const { toast } = useToast();
  function onCopy() {
    if (!question) return;

    navigator.clipboard.writeText(question);
    toast({
      variant: "success",
      description: "Message copied to clipboard",
    });
  }

  return (
    <>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <div
              className='text-3xl mt-7 hover:cursor-pointer'
              onClick={() => onCopy()}
            >
              {question}
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <p>Click to copy to clipboard</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </>
  );
};

export default Question;

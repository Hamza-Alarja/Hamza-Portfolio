"use client";
import ReactMarkdown from "react-markdown";

import Link from "next/link";
import Image from "next/image";

import { ArrowLeftIcon } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const mockBlog = [
  {
    title: "Sample Blog Title",
    author: "Author Name",
    publishedOn: "2024-06-01",
    image: "/sample-image.jpg",
    content: "This is the **content** of the blog post.",
  },
];

export default function BlogPage() {
  const currentBlog = mockBlog; 
  return (
    <article className="max-w-3xl mx-auto pb-5">
      <Link
        className={buttonVariants({
          variant: "link",
          className: "!mx-0 !px-0 mb-5 !-ml-1 hover:no-underline",
        })}
        href="/blog"
      >
        <ArrowLeftIcon className="w-4 h-4" /> Back to Blog
      </Link>

      <div className="flex flex-col gap-3 pb-7 w-full">
        <h1 className="sm:text-4xl text-3xl font-extrabold">
          {currentBlog[0].title}
        </h1>
        <div className="mt-3 flex flex-col gap-3">
          <p className="text-sm text-muted-foreground">Posted by</p>

          <div className="flex items-center gap-8 flex-wrap">
            <Link href={"/"} className="flex items-center gap-2">
              <Avatar className="w-10 h-10">
                <AvatarImage src="/favicon.ico" alt="Author" />
                <AvatarFallback>AU</AvatarFallback>
              </Avatar>

              <div>
                <p className="text-sm font-medium">{currentBlog[0].author}</p>
                <p className="text-muted-foreground text-xs">
                  {currentBlog[0].publishedOn}
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div>
        <Image
          src={currentBlog[0].image}
          alt="cover"
          width={750}
          height={400}
          layout="responsive"
          objectFit="cover"
          className="rounded-md w-full mb-5"
        />

        <div className="prose dark:prose-invert mb-5">
          <ReactMarkdown>{currentBlog[0].content}</ReactMarkdown>
        </div>
      </div>

      <button className="text-sm">Share ❤️</button>
    </article>
  );
}

/*
 * @Date: 2025-04-01 16:22:45
 * @LastEditors: guantingting
 * @LastEditTime: 2025-04-04 23:19:43
 */
import React from "react";
import { cn, formatDate } from "@/lib/utils";
import { EyeIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Author, Startup } from "@/sanity/type";
import { Skeleton } from "@/components/ui/skeleton";

export type StartupTypeCard = Omit<Startup, "author"> & { author?: Author };
const StartupCard = ({ post }: { post: StartupTypeCard }) => {
  const { _createdAt, view, author, title, category, _id, image, description } = post;
  return (
    <li className="startup-card group">
      <div className="flex-between">
        <p className="startup_card_date">{formatDate(_createdAt)}</p>
        <div className="flex gap-1.5">
          <EyeIcon className="size-6 text-primary" />
          <span className="text-16-medium">{view}</span>
        </div>
      </div>
      <div className="mt-5 gap-5">
        <div className="flex-1">
          <Link href={`/user/${author?._id}`}>
            <p className="text-16-medium line-clamp-1">{author?.name}</p>
          </Link>
          <Link href={`/startup/${_id}`}>
            <h3 className="text-26-semibold line-clamp-1">{title}</h3>
          </Link>
        </div>
        <Link href={`/user/${author?._id}`}>
          <Image
            src={author?.image || "/default-avatar.png"}
            alt={author?.name || "Unknown Author"}
            width={48}
            height={48}
            className="rounded-full"
          />
        </Link>
        <Link href={`/startup/${_id}`}>
          <p className="startup-card_desc">{description}</p>

          <img src={image} alt="placeholder" className="startup-card_img" />
        </Link>

        <div className="flex-between gap-3 mt-5">
          <Link href={`/?query=${category?.toLowerCase()}`}>
            <p className="text-16-medium">{category}</p>
          </Link>
          <Button className="startup-card_btn" asChild>
            <Link href={`/startup/${_id}`}>Details</Link>
          </Button>
        </div>
      </div>
    </li>
  );
};

export const StartupCardSkeleton = () => (
  <>
    {[0, 1, 2, 3, 4].map((index: number) => (
      <li key={cn("skeleton", index)}>
        <Skeleton className="startup-card_skeleton" />
      </li>
    ))}
  </>
);
export default StartupCard;

import Link from "next/link";
import React from "react";
import { getAllCskIds, getCskData } from "../../../lib/csk";
import FullWidthImageAndText from "../../../components/shared_ui/FullWidthImageAndText";
import RecircList from "../../../components/shared_ui/recirc/RecircList";
import StyledMarkdown from "../../../components/shared_ui/StyledMarkdown";
import VideosGroup from "../../../components/shared_ui/VideoTabs";

export async function getStaticProps({ params }) {
  const cskData = await getCskData(params.id);
  return {
    props: {
      cskData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllCskIds();
  return {
    paths,
    fallback: false,
  };
}

export default function SpecificCSK({ cskData }) {
  const { contentReact, videos, fullWidthImageAndText, recirc } = cskData;

  const link = "/pbl/csk";
  const color = "BLUE";

  return (
    <div className="relative bg-white text-black2-900">
      {/* Hero */}
      <FullWidthImageAndText
        link={link}
        color={color}
        {...fullWidthImageAndText}
      />

      <VideosGroup videos={videos} />
      {/* Layout */}
      <div className="spacing-x spacing-y">
        <StyledMarkdown children={contentReact} />
      </div>

      <RecircList link={link} {...recirc} />

      {/*  */}
      <Link href={link}>
        <a>Back to all CSKs</a>
      </Link>
    </div>
  );
}
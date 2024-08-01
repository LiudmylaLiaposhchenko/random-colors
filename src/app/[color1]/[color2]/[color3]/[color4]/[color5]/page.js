'use client';

import Main from "@/app/Main";

export default function Home({ params }) {
  const colors = [
    decodeURIComponent(params.color1),
    decodeURIComponent(params.color2),
    decodeURIComponent(params.color3),
    decodeURIComponent(params.color4),
    decodeURIComponent(params.color5),
  ];

  return <Main defaultColors={colors} />
}

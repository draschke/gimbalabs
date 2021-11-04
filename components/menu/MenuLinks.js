import Link from "next/link";
import React from "react";

const data = [
  {
    title: "Learn",
    link: "/pbl",
    list: [
      { title: "Starter Kits", link: "/pbl/csk", color: "bg-blue-600" },
      { title: "Plutus", link: "/pbl/plutus", color: "bg-pink-400" },
      { title: "Playground", link: "/pbl/playground", color: "bg-red-600" },
    ],
  },
  {
    title: "APIs",
    link: "/",
    list: [{ title: "Dandelion", link: "/dandelion_r", color: "bg-green-400" }],
  },
  {
    title: "Updates",
    link: "/updates",
    list: [{ title: "Updates", link: "/updates", color: "bg-yellow-400" }],
  },
  {
    title: "About Us",
    link: "/team",
    list: [
      { title: "Team", link: "/team", color: "bg-blue-600" },
      { title: "Calendar", link: "/calendar", color: "bg-blue-700" },
    ],
  },
];

export default function MenuLinks() {
  return (
    <section>
      <ul className="spacing-x  flex flex-wrap justify-start lg:justify-evenly">
        {data.map((group, index) => {
          return (
            <div
              key={group.title + index + "gt"}
              className="flex-1 m-5 relative flex flex-col"
            >
              <Link href={group.link}>
                <a>
                  <button className="  text-2xl border-b border-black2-900 ">
                    {group.title}
                  </button>
                </a>
              </Link>

              {/* List */}
              <div className="mt-3">
                {group.list.map((i, index) => {
                  return (
                    <li
                      className="group"
                      key={i.link + index + group.title + "gl"}
                      id={i.link + index + group.title + "gl"}
                    >
                      <Link href={i.link}>
                        <a>
                          <div className="flex items-center">
                            <div
                              className={`w-3 h-3 bg-black2-900 group-hover:${i.color} mr-2`}
                            ></div>
                            <button className=" ">{i.title}</button>
                          </div>
                        </a>
                      </Link>
                    </li>
                  );
                })}
              </div>
            </div>
          );
        })}
      </ul>
    </section>
  );
}
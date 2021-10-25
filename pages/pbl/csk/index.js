import Link from "next/link";
import React from "react";
import { getSortedCsksData } from "../../../lib/csk";
import ListAllBlocks from "../../../components/shared_ui/ListAllBlocks";
import PageTitle from "../../../components/shared_ui/PageTitle";

export async function getStaticProps() {
  const allCSKData = getSortedCsksData();

  return {
    props: {
      allCSKData,
    },
  };
}

export default function index({ allCSKData }) {
  return (
    <div className="spacing-x spacing-y">
      <PageTitle
        title={"Cardano Starter Kits"}
        subtitle={"The fastest way to get started on cardano"}
      />
      <div>
        <Link href="/pbl">
          <a>
            <button className=" mt-5 mb-9 gds-btn text-blue-900">/pbl</button>
          </a>
        </Link>
      </div>
      <ListAllBlocks color="BLUE" data={allCSKData} />
    </div>
  );
}

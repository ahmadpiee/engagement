import React from "react";
import Layout from "@components/global/Layout";
import { useRouter } from "next/router";
import { localize } from "@utils/lib/formatter";

const NotFoundPage = () => {
  const { locale } = useRouter();
  const router = useRouter();
  return (
    <Layout title={localize(locale, "notFound")}>
      <div style={{ justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
        <h2>{localize(locale, "notFound")}</h2>
        <button
          onClick={() => {
            router.replace("/");
          }}
          style={{ background: "black", color: "white" }}
        >
          {localize(locale, "goBack")}
        </button>
      </div>
    </Layout>
  );
};

export default NotFoundPage;

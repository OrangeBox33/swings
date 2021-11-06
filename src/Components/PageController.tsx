import { FC } from "react";
import { Page1 } from "./pages/Page1";
import { Page2 } from "./pages/Page2";
import { Page3 } from "./pages/Page3";

interface Props {
  page: number;
}
// @ts-ignore
export const PageController: FC<Props> = ({ page }) => {
  switch (page) {
    case 1: {
      return <Page1 />;
    }
    case 2: {
      return <Page2 />;
    }
    case 3: {
      return <Page3 />;
    }
  }
};

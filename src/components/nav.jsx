import { Navigation, Theme, Page, Header, Content } from "@yakad/ui";

function nav() {
  return (
    <Navigation anchor="auto" open={true}>
      <ul>
        <li>Category</li>
        <li>Model</li>
        <li>Other</li>
      </ul>
    </Navigation>
  );
}

export default nav;

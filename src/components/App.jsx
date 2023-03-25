
import upcomingEvent from "../upcoming-events.json";
import { EventBoard } from "./EventBoard/EventBoard";
import { PageTitle } from "./PageTitle/PageTitle";
import {ButtonClick} from "./ButtonClick/ButtonClick"
import { MyComponent } from "./MyComponent/MyComponent";

// export const App = () => {
//   return (<div>
//     <PageTitle text="24th Core Worlds Coalition Conference" />
//     <EventBoard events={upcomingEvent} />
//   </div>);
// };

export const App = () => {
  return (<>
    <MyComponent />
    <PageTitle text="24th Core Worlds Coalition Conference" />
    <EventBoard events={upcomingEvent} />
    <ButtonClick />
    <MyComponent />
  </>);
};

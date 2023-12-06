import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { AlertTriangleIcon } from './AlertTriangleIcon.js';
import { AnchorIcon } from './AnchorIcon.js';
import { ArchiveIcon } from './ArchiveIcon.js';
import { AwardIcon } from './AwardIcon.js';
import { BellIcon } from './BellIcon.js';
import { CalendarIcon2 } from './CalendarIcon2.js';
import { CalendarIcon } from './CalendarIcon.js';
import { ChartIcon } from './ChartIcon.js';
import { ChartLineIcon } from './ChartLineIcon.js';
import { CheckCircleIcon } from './CheckCircleIcon.js';
import { CheckIcon } from './CheckIcon.js';
import { CheckSquareIcon2 } from './CheckSquareIcon2.js';
import { CheckSquareIcon } from './CheckSquareIcon.js';
import { ChevronDownIcon } from './ChevronDownIcon.js';
import { CircleIcon2 } from './CircleIcon2.js';
import { CircleIcon } from './CircleIcon.js';
import { ClockIcon } from './ClockIcon.js';
import { CombinedShapeIcon } from './CombinedShapeIcon.js';
import { CopyIcon } from './CopyIcon.js';
import { CreditCardIcon } from './CreditCardIcon.js';
import { DropletIcon } from './DropletIcon.js';
import { FileIcon } from './FileIcon.js';
import { FileTextIcon } from './FileTextIcon.js';
import { Graph1Icon } from './Graph1Icon.js';
import { Graph2Icon } from './Graph2Icon.js';
import { Graph3Icon } from './Graph3Icon.js';
import { HelpCircleIcon } from './HelpCircleIcon.js';
import { HomeIcon } from './HomeIcon.js';
import { InfoIcon2 } from './InfoIcon2.js';
import { InfoIcon } from './InfoIcon.js';
import { LayoutIcon } from './LayoutIcon.js';
import { LockIcon } from './LockIcon.js';
import { MailIcon2 } from './MailIcon2.js';
import { MailIcon } from './MailIcon.js';
import { MessageSquareIcon2 } from './MessageSquareIcon2.js';
import { MessageSquareIcon } from './MessageSquareIcon.js';
import { MoreVerticalIcon } from './MoreVerticalIcon.js';
import { OvalCopy3Icon } from './OvalCopy3Icon.js';
import { OvalCopyIcon } from './OvalCopyIcon.js';
import { OvalIcon2 } from './OvalIcon2.js';
import { OvalIcon3 } from './OvalIcon3.js';
import { OvalIcon4 } from './OvalIcon4.js';
import { OvalIcon5 } from './OvalIcon5.js';
import { OvalIcon6 } from './OvalIcon6.js';
import { OvalIcon7 } from './OvalIcon7.js';
import { OvalIcon8 } from './OvalIcon8.js';
import { OvalIcon9 } from './OvalIcon9.js';
import { OvalIcon10 } from './OvalIcon10.js';
import { OvalIcon11 } from './OvalIcon11.js';
import { OvalIcon12 } from './OvalIcon12.js';
import { OvalIcon13 } from './OvalIcon13.js';
import { OvalIcon } from './OvalIcon.js';
import { Path2Icon2 } from './Path2Icon2.js';
import { Path2Icon } from './Path2Icon.js';
import { Path3Icon2 } from './Path3Icon2.js';
import { Path3Icon } from './Path3Icon.js';
import { PathIcon2 } from './PathIcon2.js';
import { PathIcon } from './PathIcon.js';
import { PlusIcon2 } from './PlusIcon2.js';
import { PlusIcon3 } from './PlusIcon3.js';
import { PlusIcon } from './PlusIcon.js';
import { ProgressBar4Icon } from './ProgressBar4Icon.js';
import { RightArrow } from './RightArrow/RightArrow';
import { SearchIcon2 } from './SearchIcon2.js';
import { SearchIcon } from './SearchIcon.js';
import { ShoppingBagIcon } from './ShoppingBagIcon.js';
import { SidebarIcon } from './SidebarIcon.js';
import { StarIcon } from './StarIcon.js';
import { UserIcon } from './UserIcon.js';
import { UsersIcon } from './UsersIcon.js';
import classes from './VuesaxAnalyticsDashboard.module.css';

interface Props {
  className?: string;
}
/* @figmaId 0:2 */
export const VuesaxAnalyticsDashboard: FC<Props> = memo(function VuesaxAnalyticsDashboard(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.background}></div>
      <div className={classes.rectangle}></div>
      <div className={classes.subscribersCard}>
        <div className={classes.rectangleCopy}></div>
        <div className={classes.chart}>
          <ChartIcon className={classes.icon} />
        </div>
        <div className={classes.chartLine}>
          <ChartLineIcon className={classes.icon2} />
        </div>
        <div className={classes.subscribersGained}>Subscribers Gained</div>
        <div className={classes._926k}>92.6k</div>
        <div className={classes.oval}>
          <OvalIcon className={classes.icon3} />
        </div>
        <div className={classes.users}>
          <UsersIcon className={classes.icon4} />
        </div>
      </div>
      <div className={classes.ordersCard}>
        <div className={classes.rectangleCopy2}></div>
        <div className={classes.ordersReceived}>Orders Received</div>
        <div className={classes._975K}>97.5K</div>
        <div className={classes.ovalCopy}>
          <OvalCopyIcon className={classes.icon5} />
        </div>
        <div className={classes.shoppingBag}>
          <ShoppingBagIcon className={classes.icon6} />
        </div>
        <div className={classes.path3}>
          <Path3Icon className={classes.icon7} />
        </div>
        <div className={classes.path2}>
          <Path2Icon className={classes.icon8} />
        </div>
      </div>
      <div className={classes.congratulationsCard}>
        <div className={classes.rectangle2}></div>
        <div className={classes.congratulationsJohn}>Congratulations John</div>
        <div className={classes.oval2}>
          <OvalIcon2 className={classes.icon9} />
        </div>
        <div className={classes.award}>
          <AwardIcon className={classes.icon10} />
        </div>
        <div className={classes.youHaveDone576}>
          You have done 57.6% more sales today. Check your new badge in your profile.
        </div>
        <div className={classes.decoreRightDa0ab5cd}></div>
        <div className={classes.decoreLeft2d9d23e0}></div>
      </div>
      <div className={classes.sessionsCard}>
        <div className={classes.rectangle3}></div>
        <div className={classes.goal1000000}>Goal: $1000000</div>
        <div className={classes.retention90}>Retention: 90%</div>
        <div className={classes.users100K}>Users: 100K</div>
        <div className={classes.duration1yr}>Duration: 1yr</div>
        <div className={classes.rectangle4}></div>
        <div className={classes.rectangle5}></div>
        <div className={classes.rectangle6}></div>
        <div className={classes.rectangle7}></div>
        <div className={classes.rectangle8}></div>
        <div className={classes.rectangle9}></div>
        <div className={classes.progressBar4}>
          <ProgressBar4Icon className={classes.icon11} />
        </div>
        <div className={classes.rectangle10}></div>
        <div className={classes.rectangle11}></div>
        <div className={classes.rectangle12}></div>
        <div className={classes.rectangle13}></div>
        <div className={classes.rectangle14}></div>
        <div className={classes.rectangle15}></div>
        <div className={classes.rectangle16}></div>
        <div className={classes.rectangle17}></div>
        <div className={classes.viewDetails}>View Details</div>
        <div className={classes.path}>
          <PathIcon className={classes.icon12} />
        </div>
        <div className={classes._27K}>2.7K</div>
        <div className={classes.avgSessions}>Avg Sessions</div>
        <div className={classes._52VsLast7Days}>
          <p className={classes.labelWrapper}>
            <span className={classes.label}>+5.2%</span>
            <span className={classes.label2}> vs last 7 days</span>
          </p>
        </div>
        <div className={classes.last7Days}>Last 7 days</div>
        <RightArrow className={classes.rightArrow} />
      </div>
      <div className={classes.ticketsCard}>
        <div className={classes.rectangle18}></div>
        <div className={classes.last7Days2}>Last 7 days</div>
        <RightArrow className={classes.rightArrow2} />
        <div className={classes.combinedShape}>
          <CombinedShapeIcon className={classes.icon13} />
        </div>
        <div className={classes.supportTracker}>Support Tracker</div>
        <div className={classes._163}>163</div>
        <div className={classes._83}>83%</div>
        <div className={classes.completedTickets}>Completed Tickets</div>
        <div className={classes.tickets}>Tickets</div>
        <div className={classes.newTickets}>New Tickets</div>
        <div className={classes.openTickets}>Open Tickets</div>
        <div className={classes.responseTime}>Response Time</div>
        <div className={classes._29}>29</div>
        <div className={classes._63}>63</div>
        <div className={classes._1d}>1d</div>
      </div>
      <div className={classes.orderCard}>
        <div className={classes.rectangle19}></div>
        <div className={classes.graph1}>
          <Graph1Icon className={classes.icon14} />
        </div>
        <div className={classes.graph2}>
          <Graph2Icon className={classes.icon15} />
        </div>
        <div className={classes.graph3}>
          <Graph3Icon className={classes.icon16} />
        </div>
        <div className={classes.productOrders}>Product Orders</div>
        <div className={classes.finished}>Finished</div>
        <div className={classes.total42459}>
          <div className={classes.textBlock}>Total</div>
          <div className={classes.textBlock2}>
            <p className={classes.labelWrapper2}>
              <span className={classes.label3}>42459</span>
            </p>
          </div>
        </div>
        <div className={classes.oval3}>
          <OvalIcon3 className={classes.icon17} />
        </div>
        <div className={classes.oval4}>
          <OvalIcon4 className={classes.icon18} />
        </div>
        <div className={classes.oval5}>
          <OvalIcon5 className={classes.icon19} />
        </div>
        <div className={classes._23043}>23043</div>
        <div className={classes.pending}>Pending</div>
        <div className={classes._14658}>14658</div>
        <div className={classes.rejected}>Rejected</div>
        <div className={classes._4758}>4758</div>
      </div>
      <div className={classes.salesCard}>
        <div className={classes.rectangle20}></div>
        <div className={classes.chart2}>
          <div className={classes.path4}>
            <PathIcon2 className={classes.icon20} />
          </div>
          <div className={classes.path22}>
            <Path2Icon2 className={classes.icon21} />
          </div>
          <div className={classes.path32}>
            <Path3Icon2 className={classes.icon22} />
          </div>
          <div className={classes.jan}>Jan</div>
          <div className={classes.fab}>Fab</div>
          <div className={classes.mar}>Mar</div>
          <div className={classes.apr}>Apr</div>
          <div className={classes.may}>May</div>
          <div className={classes.jun}>Jun</div>
        </div>
        <div className={classes.salesStats}>Sales Stats</div>
        <div className={classes.last6Months}>Last 6 Months</div>
        <div className={classes.sales}>Sales</div>
        <div className={classes.oval6}>
          <OvalIcon6 className={classes.icon23} />
        </div>
        <div className={classes.ovalCopy3}>
          <OvalCopy3Icon className={classes.icon24} />
        </div>
        <div className={classes.moreVertical}>
          <MoreVerticalIcon className={classes.icon25} />
        </div>
        <div className={classes.salesCopy}>Sales</div>
      </div>
      <div className={classes.activityCard}>
        <div className={classes.rectangle21}></div>
        <div className={classes.activityTimeline}>Activity Timeline</div>
        <div className={classes.list1}>
          <div className={classes.clientMeeting}>Client Meeting</div>
          <div className={classes.bonbonMacaroonJell}>Bonbon macaroon jelly beans gummi bears jelly lollipop apple</div>
          <div className={classes._25MinsAgo}>25 mins ago</div>
          <div className={classes.oval7}>
            <OvalIcon7 className={classes.icon26} />
          </div>
          <div className={classes.plus}>
            <PlusIcon className={classes.icon27} />
          </div>
        </div>
        <div className={classes.list2}>
          <div className={classes.emailNewsletter}>Email Newsletter</div>
          <div className={classes.cupcakeGummiBears}>Cupcake gummi bears soufflé caramels candy</div>
          <div className={classes._25MinsAgo2}>25 mins ago</div>
          <div className={classes.oval8}>
            <OvalIcon8 className={classes.icon28} />
          </div>
          <div className={classes.info}>
            <InfoIcon className={classes.icon29} />
          </div>
        </div>
        <div className={classes.list3}>
          <div className={classes.planWebinar}>Plan Webinar</div>
          <div className={classes.candyIceCreamCake}>Candy ice cream cake. Halvah gummi bears</div>
          <div className={classes._25MinsAgo3}>25 mins ago</div>
          <div className={classes.oval9}>
            <OvalIcon9 className={classes.icon30} />
          </div>
          <div className={classes.check}>
            <CheckIcon className={classes.icon31} />
          </div>
        </div>
        <div className={classes.list4}>
          <div className={classes.launchWebsite}>Launch Website</div>
          <div className={classes.candyIceCreamCake2}>Candy ice cream cake. Halvah gummi bears Cupcake </div>
          <div className={classes._25MinsAgo4}>25 mins ago</div>
          <div className={classes.oval10}>
            <OvalIcon10 className={classes.icon32} />
          </div>
          <div className={classes.plus2}>
            <PlusIcon2 className={classes.icon33} />
          </div>
        </div>
        <div className={classes.list5}>
          <div className={classes.marketing}>Marketing</div>
          <div className={classes.candyIceCreamCake3}>Candy ice cream cake. Halvah gummi bears Cupcake</div>
          <div className={classes._25MinsAgo5}>25 mins ago</div>
          <div className={classes.oval11}>
            <OvalIcon11 className={classes.icon34} />
          </div>
          <div className={classes.plus3}>
            <PlusIcon3 className={classes.icon35} />
          </div>
        </div>
      </div>
      <div className={classes.rectangle22}></div>
      <div className={classes.pages}>
        <div className={classes.lock}>
          <LockIcon className={classes.icon36} />
        </div>
        <div className={classes.clock}>
          <ClockIcon className={classes.icon37} />
        </div>
        <div className={classes.alertTriangle}>
          <AlertTriangleIcon className={classes.icon38} />
        </div>
        <div className={classes.anchor}>
          <AnchorIcon className={classes.icon39} />
        </div>
        <div className={classes.user}>
          <UserIcon className={classes.icon40} />
        </div>
        <div className={classes.helpCircle}>
          <HelpCircleIcon className={classes.icon41} />
        </div>
        <div className={classes.info2}>
          <InfoIcon2 className={classes.icon42} />
        </div>
        <div className={classes.search}>
          <SearchIcon className={classes.icon43} />
        </div>
        <div className={classes.file}>
          <FileIcon className={classes.icon44} />
        </div>
        <div className={classes.authenticationComin}>
          <div className={classes.textBlock3}>Authentication</div>
          <div className={classes.textBlock4}>Coming Soon</div>
          <div className={classes.textBlock5}>Error</div>
          <div className={classes.textBlock6}>Maintenance</div>
          <div className={classes.textBlock7}>Profile</div>
          <div className={classes.textBlock8}>FAQ</div>
          <div className={classes.textBlock9}>Knowledge Base</div>
          <div className={classes.textBlock10}>Search</div>
          <div className={classes.textBlock11}>Invoice</div>
        </div>
        <div className={classes.pAGES}>PAGES</div>
        <RightArrow className={classes.rightArrow3} />
        <RightArrow className={classes.rightArrow4} />
      </div>
      <div className={classes.forms}>
        <div className={classes.formElementsFormL}>
          <div className={classes.textBlock12}>Form Elements</div>
          <div className={classes.textBlock13}>Form Layouts</div>
          <div className={classes.textBlock14}>Form Wizard</div>
          <div className={classes.textBlock15}>Form Validation</div>
        </div>
        <div className={classes.fORMS}>FORMS</div>
        <div className={classes.sidebar}>
          <SidebarIcon className={classes.icon45} />
        </div>
        <div className={classes.fileText}>
          <FileTextIcon className={classes.icon46} />
        </div>
        <div className={classes.checkCircle}>
          <CheckCircleIcon className={classes.icon47} />
        </div>
        <div className={classes.copy}>
          <CopyIcon className={classes.icon48} />
        </div>
        <RightArrow className={classes.rightArrow5} />
      </div>
      <div className={classes.uIElements}>
        <div className={classes.gridColorsCardTab}>
          <div className={classes.textBlock16}>Grid</div>
          <div className={classes.textBlock17}>Colors</div>
          <div className={classes.textBlock18}>Card</div>
          <div className={classes.textBlock19}>Table</div>
          <div className={classes.textBlock20}>Components</div>
        </div>
        <RightArrow className={classes.rightArrow6} />
        <RightArrow className={classes.rightArrow7} />
        <RightArrow className={classes.rightArrow8} />
        <div className={classes.layout}>
          <LayoutIcon className={classes.icon49} />
        </div>
        <div className={classes.rectangle23}></div>
        <div className={classes.rectangle24}></div>
        <div className={classes.rectangle25}></div>
        <div className={classes.rectangle26}></div>
        <div className={classes.archive}>
          <ArchiveIcon className={classes.icon50} />
        </div>
        <div className={classes.droplet}>
          <DropletIcon className={classes.icon51} />
        </div>
        <div className={classes.creditCard}>
          <CreditCardIcon className={classes.icon52} />
        </div>
        <div className={classes.uIELEMENTS}>UI ELEMENTS</div>
      </div>
      <div className={classes.apps}>
        <div className={classes.emailChatTodoCale}>
          <div className={classes.textBlock21}>Email</div>
          <div className={classes.textBlock22}>Chat</div>
          <div className={classes.textBlock23}>Todo</div>
          <div className={classes.textBlock24}>Calendar</div>
        </div>
        <div className={classes.aPPS}>APPS</div>
        <div className={classes.mail}>
          <MailIcon className={classes.icon53} />
        </div>
        <div className={classes.messageSquare}>
          <MessageSquareIcon className={classes.icon54} />
        </div>
        <div className={classes.checkSquare}>
          <CheckSquareIcon className={classes.icon55} />
        </div>
        <div className={classes.calendar}>
          <CalendarIcon className={classes.icon56} />
        </div>
      </div>
      <div className={classes.dashboard}>
        <div className={classes.rectangle27}></div>
        <div className={classes.rectangleCopy8}></div>
        <div className={classes.dashboardAnalytics}>
          <div className={classes.textBlock25}> Dashboard</div>
          <div className={classes.textBlock26}>
            <p className={classes.labelWrapper3}>
              <span className={classes.label4}> </span>
              <span className={classes.label5}>Analytics</span>
            </p>
          </div>
          <div className={classes.textBlock27}>
            <p className={classes.labelWrapper4}>
              <span className={classes.label6}> eCommerce </span>
            </p>
          </div>
        </div>
        <div className={classes.chevronDown}>
          <ChevronDownIcon className={classes.icon57} />
        </div>
        <div className={classes.circle}>
          <CircleIcon className={classes.icon58} />
        </div>
        <div className={classes.circle2}>
          <CircleIcon2 className={classes.icon59} />
        </div>
        <div className={classes.home}>
          <HomeIcon className={classes.icon60} />
        </div>
      </div>
      <div className={classes.logo}>
        <div className={classes.vuesax}>Vuesax</div>
        <div className={classes.logo2}></div>
        <div className={classes.oval12}>
          <OvalIcon12 className={classes.icon61} />
        </div>
      </div>
      <div className={classes.navbar}>
        <div className={classes.rectangle28}></div>
        <div className={classes.english}>English</div>
        <div className={classes.johnDoe}>John Doe</div>
        <div className={classes.available}>Available</div>
        <div className={classes.checkSquare2}>
          <CheckSquareIcon2 className={classes.icon62} />
        </div>
        <div className={classes.messageSquare2}>
          <MessageSquareIcon2 className={classes.icon63} />
        </div>
        <div className={classes.mail2}>
          <MailIcon2 className={classes.icon64} />
        </div>
        <div className={classes.calendar2}>
          <CalendarIcon2 className={classes.icon65} />
        </div>
        <div className={classes.star}>
          <StarIcon className={classes.icon66} />
        </div>
        <div className={classes.bell}>
          <BellIcon className={classes.icon67} />
        </div>
        <div className={classes.search2}>
          <SearchIcon2 className={classes.icon68} />
        </div>
        <div className={classes.oval13}>
          <OvalIcon13 className={classes.icon69} />
        </div>
      </div>
    </div>
  );
});

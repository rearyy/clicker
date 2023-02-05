import ai_if_else from '@/assets/upgrades/ai_if_else.png'
import async from '@/assets/upgrades/async.png'
import avian from '@/assets/upgrades/avian.png'
import c4 from '@/assets/upgrades/c4.png'
import event_storming from '@/assets/upgrades/event_storming.png'
import kill_child from '@/assets/upgrades/kill_child.png'
import microservices from '@/assets/upgrades/microservices.png'
import monolith from '@/assets/upgrades/monolith.png'
import nosql from '@/assets/upgrades/nosql.png'
import paxos from '@/assets/upgrades/paxos.png'
import postgres from '@/assets/upgrades/postgres.png'
import raft from '@/assets/upgrades/raft.png'
import rocket from '@/assets/upgrades/rocket.png'
import shark from '@/assets/upgrades/shark.png'
import teapot from '@/assets/upgrades/teapot.png'
import trash from '@/assets/upgrades/trash.png'
import xslt from '@/assets/upgrades/xslt.png'

const upgradeList = [
  {
    id: 1,
    image: monolith,
    title: "Monolith",
    cost: 10,
    description: "Modular, well written masterpiece",
    more: [
      {
        url: "https://twitter.com/alexxubyte/status/1577684758779203584",
        name: "I mean Stack Overflow. What did you think?!",
      }
    ],
    spPerSecond: 1
  },
  {
    id: 2,
    image: kill_child,
    title: "Kill a child",
    cost: 10,
    description: "process. I meant process! Too late",
    spPerSecond: -1
  },
  {
    id: 3,
    image: rocket,
    title: "It's a hardware problem",
    cost: 10,
    description: "It's fixed in Apollo 12.",
    more: [
      {
        url: "https://github.com/chrislgarry/Apollo-11/issues/3",
        name: "Apollo 11 github",
      }
    ],
    spPerSecond: -1
  },
  {
    id: 4,
    image: event_storming,
    title: "Event storming",
    cost: 10,
    description: "On last meeting one of the Folks mistook the event sourcing for the event storming. Now whole office is covered with sticky notes.",
    spPerSecond: -1
  },
  {
    id: 5,
    image: teapot,
    title: "Http code 418",
    cost: 10,
    description: "I'm a teapot",
    spPerSecond: -1
  },
  {
    id: 6,
    image: avian,
    title: "RFC 1149- IP over Avian Carriers",
    cost: 10,
    description: "If you need this with QoS read also RFC 2549.",
    more: [
      {
        url: "https://www.rfc-editor.org/rfc/rfc1149",
        name: "RFC 1149",
      },
      {
        url: "https://www.rfc-editor.org/rfc/rfc2549",
        name: "RFC 2549",
      }
    ],
    spPerSecond: -1
  },
  {
    id: 7,
    image: xslt,
    title: "XSLT Transformation",
    cost: 10,
    description: "You can do EVERYTHING with it. At least until it's XML. Or a JSON (starting from XSLT 3.0).",
    spPerSecond: 1
  },
  {
    id: 8,
    image: shark,
    title: "The global internet is being attacked by sharks",
    cost: 10,
    description: "Google confirms. But cables are well armored so it doesn't affect you at all.",
    more: [
      {
        url: "https://slate.com/technology/2014/08/shark-attacks-threaten-google-s-undersea-internet-cables-video.html",
        name: "Really!",
      }
    ],
    spPerSecond: -1
  },
  {
    id: 10,
    image: async,
    title: "Async",
    cost: 10,
    description: "problem. Now you have a",
    spPerSecond: 1
  },
  {
    id: 11,
    image: ai_if_else,
    title: "AI based on if/else statements",
    cost: 10,
    description: "Maybe it introduces some technical debt but it will be fixed on a next sprint, I promise.",
    spPerSecond: -1
  },
  {
    id: 12,
    image: microservices,
    title: "Microservices",
    cost: 10,
    description: "with monolith database. But who cares. New possibilities for CV driven development. Yay!",
    spPerSecond: 1
  },
  {
    id: 13,
    image: nosql,
    title: "NoSQL",
    cost: 10,
    description: "Now you are an expert in modeling relational databases in technologies which don't support that approach.",
    spPerSecond: -1
  },
  {
    id: 14,
    image: postgres,
    title: "Postgres",
    cost: 10,
    description: "It's faster than MongoDB when it comes to JSON.",
    spPerSecond: 1
  },
  {
    id: 15,
    image: c4,
    title: "C4 diagram",
    cost: 10,
    description: "Everybody is impressed that you have a diagram with zoom functionality. Great work!",
    spPerSecond: 1
  },
  {
    id: 16,
    image: raft,
    title: "Raft protocol",
    cost: 10,
    description: "Democracy is so good that now even your servers vote to elect a leader.",
    more: [
            {
              url: "https://thesecretlivesofdata.com/raft/",
              name: "The Secret Lives of Data",
            }
        ],
    spPerSecond: 1
  },
  {
    id: 17,
    image: paxos,
    title: "Paxos protocol",
    cost: 10,
    description: "That's why Raft exists.",
    spPerSecond: -1
  },
  {
    id: 18,
    image: trash,
    title: "Proof of Concept",
    cost: 10,
    description: "How to explain to business that you wrote working piece of code but now you have to write it once again?",
    spPerSecond: 1
  }
]

export default upgradeList;

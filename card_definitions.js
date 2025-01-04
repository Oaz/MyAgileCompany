/*
 * Copyright 2017-2025 - Olivier Azeau
 * 
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published
 * by the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 * 
 */

var cards = [
  {
    family:"cover",
    newpage:false,
    cardsByPage:10,
    items: [
      { quantity:1 }
    ]
  },
  {
    family:"leader",
    newpage:false,
    cardsByPage:10,
    items: [
      { quantity:1 }
    ]
  },
  {
    family:"product-team",
    newpage:true,
    cardsByPage:10,
    items: [
      { quantity:10, title:"ADVERGAME", description:"Advertising games", cost:1, score:1 },
      { quantity:7, title:"EDUCATION", description:"Educational games", cost:2, score:1 },
      { quantity:7, title:"SOCIAL", description:"Social games", cost:3, score:2 },
      { quantity:7, title:"MMOG", description:"Massively multiplayer online games", cost:4, score:2 }
    ]
  },
  {
    family:"agile-maturity",
    newpage:false,
    cardsByPage:10,
    items: [
      { quantity:3, title:"Passionate Developer", cost:1, score:1,
        description:"Your involvement in the developer community facilitates recruitment.",
        activity:"RETROSPECTIVE", gain:"You pay one less card to form a product team." },
      { quantity:3, title:"Agile Practitioner", cost:1, score:1,
        description:"Your involvement in the agile community allows you to make the most of peer-to-peer meetings.",
        activity:"CONFERENCE", gain:"You can discard cards from your hand instead of drawn cards." },
      { quantity:3, title:"User Experience", cost:2, score:1,
        description:"You pay particular attention to user business needs.",
        activity:"DEPLOYMENT", gain:"You receive an extra card when deploying at least two products." },
      { quantity:3, title:"Pair Programming", cost:2, score:1,
        description:"Systematic pair programming improves communication among your developers.",
        activity:"DEVELOPMENT", gain:"You draw a card when developing at least two products." },
      { quantity:3, title:"Agile Organizer", cost:3, score:2,
        description:"You organize meetings among agile practitioners to enhance exchanges.",
        activity:"CONFERENCE", gain:"You keep one extra card among the drawn cards." },
      { quantity:3, title:"Feedback Sessions", cost:3, score:2,
        description:"You learn more about yourself by analyzing the impact of your decisions.",
        activity:"RETROSPECTIVE", gain:"You draw a card after implementing an improvement action." },
      { quantity:3, title:"Clean Code", cost:3, score:2,
        description:"Attention to code quality allows you to code faster and better.",
        activity:"DEVELOPMENT", gain:"You develop an additional product." },
      { quantity:3, title:"Continuous Delivery", cost:3, score:2,
        description:"Your product is always ready to be delivered.",
        activity:"DEPLOYMENT", gain:"You deploy an additional product." },
      { quantity:3, title:"DevOps", cost:3, score:2,
        description:"Removing barriers between teams streamlines the product lifecycle.",
        activity:"RETROSPECTIVE", gain:"You can pay with yet-to-be-deployed products, each valued at 2 cards." },
      { quantity:3, title:"Agile HR", cost:4, score:2,
        description:"The agility of your internal organization increases your capacity for action.",
        activity:"LEADER", gain:"You can hold up to 10 cards when changing the game leader." },
      { quantity:3, title:"Engaged Users", cost:4, score:2,
        description:"You involve your users in product development.",
        activity:"DEPLOYMENT", gain:"You receive an extra card during deployment." },
      { quantity:3, title:"Internal Coach", cost:4, score:2,
        description:"A coach is always available to improve your teams.",
        activity:"RETROSPECTIVE", gain:"You pay one less card to carry out an improvement action." },
      { quantity:3, title:"Detailed Planning", cost:1, score:-4,
        description:"Detailed planning allows you to predict the future with precision.",
        activity:"THEEND", gain:"This card is automatically added to your company if it's in your hand at the end of the game." },
      { quantity:3, title:"Test Team", cost:1, score:-4,
        description:"An independent test team ensures products always meet expectations.",
        activity:"THEEND", gain:"This card is automatically added to your company if it's in your hand at the end of the game." },
      { quantity:3, title:"Application Framework", cost:1, score:-5,
        description:"Using an application framework boosts your development productivity.",
        activity:"THEEND", gain:"This card is automatically added to your company if it's in your hand at the end of the game." },
      { quantity:3, title:"Agile Certification", cost:1, score:-5,
        description:"Certifying your teams ensures adoption of agile values, principles, and practices.",
        activity:"THEEND", gain:"This card is automatically added to your company if it's in your hand at the end of the game." },
      { quantity:2, title:"Software Craftsmanship", cost:5, score:"∗",
        description:"Your developers are driven by unyielding professionalism.",
        activity:"THEEND", gain:"Each product team earns you two additional points at the end of the game." },
      { quantity:2, title:"Agile Sensei", cost:5, score:"∗",
        description:"You have mastered the art of advancing your teams.",
        activity:"THEEND", gain:"Each value or improvement action earns you one additional point at the end of the game." },
      { quantity:2, title:"Product Vision", cost:5, score:"∗",
        description:"Your strategy is underpinned by a clear vision of your products.",
        activity:"THEEND", gain:"Your final score is increased by 30%." }
    ]
  },
  {
    family:"agile-value",
    newpage:false,
    cardsByPage:10,
    items: [
      { quantity:1, title:"Humor",
        description:"Is humor an agile value? Some think so." },
      { quantity:2, title:"Feedback",
        description:"Feedback is one of the values emphasized by Extreme Programming." },
      { quantity:2, title:"Simplicity",
        description:"Simplicity is one of the values emphasized by Extreme Programming." },
      { quantity:2, title:"Trust",
        description:"Trust is one of the values emphasized by Scrum." },
      { quantity:2, title:"Transparency",
        description:"Transparency is one of the values emphasized by Scrum." },
      { quantity:2, title:"Courage",
        description:"Courage is a value shared by Scrum and Extreme Programming." },
      { quantity:2, title:"Respect",
        description:"Respect is a value shared by Scrum and Extreme Programming." }
    ]
  },
  {
    family:"activity",
    newpage:true,
    cardsByPage:10,
    items: [
      { quantity:1, title:"Development", logo:"DEVELOPMENT",
        description:"Each player can develop a product",
        privilege:"The activity initiator can develop one additional product" },
      { quantity:1, title:"Deployment", logo:"DEPLOYMENT",
        description:"Each player can deploy a product",
        privilege:"The activity initiator can deploy one additional product" },
      { quantity:1, title:"Retrospective", logo:"RETROSPECTIVE",
        description:"Each player can set up a team or an improvement action",
        privilege:"The activity initiator pays one less card" },
      { quantity:1, title:"Conference", logo:"CONFERENCE",
        description:"Each player draws two cards and keeps one",
        privilege:"The activity initiator draws five cards instead of two" },
      { quantity:1, title:"Coach", logo:"COACH",
        description:"The coach's intervention is limited to the activity initiator",
        privilege:"The activity initiator draws one card and keeps it" }
    ]
  },
  {
    family:"profits",
    newpage:false,
    cardsByPage:10,
    items: [
      { quantity:1, ADVERGAME:2, EDUCATION:2, SOCIAL:3, MMOG:3 },
      { quantity:1, ADVERGAME:2, EDUCATION:2, SOCIAL:3, MMOG:4 },
      { quantity:1, ADVERGAME:2, EDUCATION:3, SOCIAL:3, MMOG:4 },
      { quantity:1, ADVERGAME:2, EDUCATION:3, SOCIAL:4, MMOG:4 }
    ]
  }
];

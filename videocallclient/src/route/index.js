import Home from "../page/home";
import Chat from "../page/chat";
const publicRoute=[
    {path:"/",component:Home},
    {path:"/home",component:Home},
    {path:"/chat",component:Chat},
    {path:"/sidebar",component:Chat},
]
const privateRoute=[
]
export {publicRoute,privateRoute}
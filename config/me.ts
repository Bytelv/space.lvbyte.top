import { links } from '../config/links'
import { Gmail, Java, Python , Javascript, Typescript, Swift, Mysql, Realm, Mongodb, Html5, CssThree, ReactJs, Nodedotjs, Nextdotjs, Vuedotjs, Tailwindcss, Spring, Springboot, Stylus , Scikitlearn, Tensorflow, Docker, Git, Redis, Apachehadoop, Postman} from '@icons-pack/react-simple-icons'

export const me = {
    site: "https://blog.lvbyte.top",
    name: '字节君の思想宇宙💯',
    bio: '💻 🎨 🎮 ⚡️',
    social: [
        ...links,
        {
            url: 'mailto:2015078351@qq.com',
            icon: Gmail,
            name: 'Email',
            fill: "fill-gray-400",
            border: "border-gray-400",
            text: "text-gray-400",
            shadow: "shadow-sky-300",
            color: 'from-blue-600 to-sky-300',
        },
    ],
    overview : [
        
    ],
    education: [
        {
            name: '顺德一中西南学校',
            time: '2020-2023',
            degree: '一名高中生',
            color: 'blue',
            logo : "/static/images/njupt.png",
        }
    ],
    skills : [[
        { name: "Java", color: "bg-[#007396]", icon: Java},
        { name: "Python", color: "bg-[#3776AB]", icon: Python},
        { name: "Javascript", color: "bg-[#F7DF1E]", icon: Javascript},
        { name: "Typescript", color: "bg-[#3178C6]", icon: Typescript},
        { name: "Swift", color: "bg-[#F05138]", icon: Swift},        
        { name: "HTML5", color: "bg-[#E34F26]", icon: Html5},
        { name: "CSS3", color: "bg-[#1572B6]", icon: CssThree},        
    ],
    [
        { name: "Apache Hadoop", color: "bg-[#66CCFF]", icon: Apachehadoop},
        { name: "React", color: "bg-[#61DAFB]", icon: ReactJs},
        { name: "Node.js", color: "bg-[#339933]", icon: Nodedotjs},
        { name: "Next.js", color: "bg-[#000000]", icon: Nextdotjs},
        { name: "Vue.js", color: "bg-[#4FC08D]", icon: Vuedotjs},
        { name: "Tailwind CSS", color: "bg-[#06B6D4]", icon: Tailwindcss},
        { name: "Spring", color: "bg-[#6DB33F]", icon: Spring},
        { name: "Stylus", color: "bg-[#333333]", icon: Stylus},
        { name: "scikit-learn", color: "bg-[#F7931E]", icon: Scikitlearn},    
        { name: "TensorFlow", color: "bg-[#F7931E]", icon: Tensorflow},    
    ],
    [          
        { name: "MySQL", color: "bg-[#4479A1]", icon: Mysql},
        { name: "Redis", color: "bg-[#DC382D]", icon: Redis},
        { name: "Realm", color: "bg-[#39477F]", icon: Realm},
        { name: "MongoDB", color: "bg-[#47A248]", icon: Mongodb},
        { name: "Git", color: "bg-[#F05032]", icon: Git},
        { name: "Postman", color: "bg-[#FF6C37]", icon: Postman},
        { name: "Docker", color: "bg-[#0AA6D8]", icon: Docker}    
    ]
]
}

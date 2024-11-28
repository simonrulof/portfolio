export const Skill:React.FC<{skill_name: string, skill_level: number}> = ({skill_name, skill_level}) => {

    const width = "w-[" + skill_level + "%]"

    return <div className="text-2xl pt-5">
    <div className="text-primary">{skill_name}</div>
    <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-primary">
      <div className={`bg-blue-600 h-2.5 rounded-full dark:bg-blue-500 ${width}`}></div>
    </div>
    </div>
}
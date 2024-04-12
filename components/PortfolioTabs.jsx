"use client"
import ProjectCard from "@/components/ProjectCard";
import {Tabs, TabsList, TabsContent, TabsTrigger} from '@/components/ui/tabs'
import { useState } from "react";

const projectData = [
    {
        image: '/work/3-min.png',
        category: 'Portraits',
        name: 'Portrait: Macro Allian',
        description:
        'Shoot Date: 08/01/2024',
        link: '/',
        codepen: '/',
    },
    {
        image: '/work/9-min.png',
        category: 'Portraits',
        name: 'Portrait: Mark Adam',
        description:
        'Shoot Date: 11/01/2023',
        link: '/',
        codepen: '/',
    },
    {
        image: '/work/2-min.png',
        category: 'Products',
        name: 'Product: Cosmetics',
        description:
        'Shoot Date: 14/01/2021',
        link: '/',
        codepen: '/',
    },
    {
        image: '/work/1-min.png',
        category: 'Portraits',
        name: 'Portrait: Lucy Aln',
        description:
        'Shoot Date: 16/07/2023',
        link: '/',
        codepen: '/',
    },
    {
        image: '/work/8-min.png',
        category: 'Fashion',
        name: 'Fashion: Susee',
        description:
        'Shoot Date: 28/07/2024',
        link: '/',
        codepen: '/',
    },
    {
        image: '/work/4-min.png',
        category: 'Products',
        name: 'Canteen Website',
        description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
        link: '/',
        codepen: '/',
    },
    {
        image: '/work/5-min.png',
        category: 'Portraits',
        name: 'Portrait: Elsa Liv',
        description:
        'Shoot Date: 09/03/2024',
        link: '/',
        codepen: '/',
    },
    {
        image: '/work/11-min.png',
        category: 'Fashion',
        name: 'Fashion: Adam',
        description:
        'Shoot Date: 13/02/2022',
        link: '/',
        codepen: '/',
    },
]

const uniqueCategories = [
    'all projects',
    ...new Set(projectData.map((item)=> item.category))
]

const PortfolioTabs = () => {

    const [categories, setCategories] = useState(uniqueCategories);
    const [category, setCategory] = useState('all projects')

    // Filter
    const filteredProjects = projectData.filter((project)=>{
        return category === "all projects"
        ? project
        : project.category === category;
    });

    // console.log(filteredProjects)

    return (
        <Tabs defaultValue={category} className="mb-24 xl:mb-48">
            <TabsList className="w-full grid h-full md:grid-cols-4 lg:max-w-[740px] mb-12 mx-auto md:border dark:border-none">
                {
                    categories.map((category, index)=>(
                        <TabsTrigger
                        value={category}
                        key={index}
                        onClick={()=> setCategory(category)}
                        className="capitalize w-[162px] md:w-auto"
                        >
                            {category}
                        </TabsTrigger>
                    ))
                }
            </TabsList>

            {/* Tab Content */}
                <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
                        {
                            filteredProjects.map((project, index)=> {
                                return (
                                    <TabsContent value={category} key={index}>
                                        <ProjectCard project={project} />
                                    </TabsContent>
                                )
                            })
                        }
                </div>

        </Tabs>
    );
}

export default PortfolioTabs;
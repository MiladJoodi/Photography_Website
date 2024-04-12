import ProjectCard from "./ProjectCard";

const projectData = [
    {
        image: "/work/3-min.png",
        category: "Portraits",
        name: "March 12, 2024",
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
        link: "/",
        codepen: "/"
    },
    {
        image: "/work/5-min.png",
        category: "Models",
        name: "February 29, 2024",
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
        link: "/",
        codepen: "/"
    },
    {
        image: "/work/6-min.png",
        category: "Places",
        name: "Nov 07, 2023",
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
        link: "/",
        codepen: "/"
    },
    {
        image: "/work/7-min.png",
        category: "Corporate",
        name: "Jan 14, 2024",
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
        link: "",
        codepen: "/"
    },
    {
        image: "/work/8-min.png",
        category: "Fashion",
        name: "Jan 14, 2024",
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
        link: "",
        codepen: "/"
    },
    {
        image: "/work/9-min.png",
        category: "Fashion",
        name: "Jan 14, 2024",
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
        link: "",
        codepen: "/"
    },{
        image: "/work/10-min.png",
        category: "Corporate",
        name: "Jan 14, 2024",
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
        link: "",
        codepen: "/"
    },
    {
        image: "/work/3-min.png",
        category: "Models",
        name: "Jan 14, 2024",
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
        link: "",
        codepen: "/"
    },
]

const Gallery = () => {


    return (
        <section className="relative mb-12 xl:mb-48">
            <div className="container mx-auto">
                <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
                    My Gallery
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-3">
                    {projectData.map((project,index)=>(
                        <ProjectCard project={project} key={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Gallery;
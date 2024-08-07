import Image from 'next/image';
import Link from 'next/link';

interface ProjectImage {
    src: string;
    alt: string;
}

interface ProjectCardInterface {
    title: string;
    summary: string;
    image: ProjectImage | ProjectImage[];
    tags?: string[];
    large?: boolean;
    active?: boolean;
}

function ProjectCard({...props}: ProjectCardInterface): JSX.Element {
    const SUMMARY_LIMIT = 120;
    const summary = props.summary.substring(0, SUMMARY_LIMIT);

    const imageArray = Array.isArray(props.image) && props.image;
    const image = !Array.isArray(props.image) && props.image;

    return (
        <div
            className={`
                card bg-base-100 shadow-xl overflow-hidden masonry-item w-full h-full
                ${props.large ? 'flex flex-col md:flex-row col-[span_2]' : 'row-[span_2]'}
            `}
        >
            <figure
                className={`relative bg-cover bg-[center_left_-6rem] rounded-none ${
                    props.large ? 'w-full h-full' : 'h-[200px] w-[500px]'
                }`}
            >
                {imageArray ? (
                    <div className="relative h-full w-full">
                        <div className="carousel w-full h-full">
                            {imageArray.map((img) => (
                                <div
                                    id={`item${imageArray.indexOf(img)}`}
                                    className="carousel-item w-full h-full"
                                    key={img.alt.substring(0, 10)}
                                >
                                    {/* Daisy UI uses img rather than Image. */}
                                    {/* eslint-disable-next-line */}
                                    <img className="object-cover h-full w-full" src={img.src} alt={img.alt} />
                                </div>
                            ))}
                        </div>
                        <div className="flex w-full justify-center gap-2 py-2 absolute bottom-2">
                            {imageArray.map((img, i) => (
                                <a
                                    href={`#item${i}`}
                                    className="h-2 w-2 bg-midnight rounded-full"
                                    key={img.alt.substring(0, 10)}
                                >
                                    <p className="sr-only">View image ${i + 1}</p>
                                </a>
                            ))}
                        </div>
                    </div>
                ) : (
                    image && <Image fill className="hidden" src={image.src} alt={image.alt} />
                )}
            </figure>
            <div className="card-body text-left py-4">
                <h2 className="card-title tracking-tighter font-bold font-mono flex flex-col gap-3 items-start text-2xl">
                    <span className="">{props.title}</span>
                    {props.active && (
                        <span className="badge badge-secondary bg-midnight border-midnight font-medium tracking-normal text-xs">
                            Active
                            <span className="relative flex h-1.5 w-1.5 ml-2 items-center justify-center">
                                <span className="motion-safe:animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald opacity-75" />
                                <span className="relative inline-flex rounded-full h-1 w-1 bg-emerald" />
                            </span>
                        </span>
                    )}
                </h2>
                <p className="mt-4">
                    {summary}
                    {props.summary.length > SUMMARY_LIMIT && '...'}
                </p>
                <div className="flex flex-col items-end gap-4 text-sm">
                    <Link href="/" className="link py-1 font-semibold">
                        Read more
                    </Link>
                    <div className="card-actions justify-end font-mono font-medium">
                        {props.tags?.map((i) => (
                            <div key={i.toLowerCase()} className="badge badge-outline text-xs flex items-center">
                                {i}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

ProjectCard.defaultProps = {
    tags: [],
    large: false,
    active: false,
};

export default ProjectCard;

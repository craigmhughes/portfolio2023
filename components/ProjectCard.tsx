import Image from 'next/image';
import Link from 'next/link';

interface ProjectCardInterface {
    title: string;
    summary: string;
    image: {
        src: string;
        alt: string;
    };
    tags?: string[];
    large?: boolean;
    active?: boolean;
}

function ProjectCard({...props}: ProjectCardInterface): JSX.Element {
    const SUMMARY_LIMIT = 120;
    const summary = props.summary.substring(0, SUMMARY_LIMIT);

    return (
        <div
            className={`
                card bg-base-100 shadow-xl overflow-hidden masonry-item w-full h-full
                ${props.large ? 'flex flex-col md:flex-row col-[span_2]' : 'row-[span_2]'}
            `}
        >
            <figure
                style={{
                    backgroundImage: `url(${props.image.src})`,
                }}
                className={`relative bg-cover bg-[center_left_-6rem] rounded-none ${
                    props.large ? 'w-full h-full' : 'h-[200px] w-[500px]'
                }`}
            >
                <Image fill className="hidden" src={props.image.src} alt={props.image.alt} />
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

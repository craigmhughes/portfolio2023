import Image from 'next/image';
import type {Dispatch, SetStateAction} from 'react';

import type {Project} from './homepage/Projects';

export interface ProjectInterface extends Project {
    setActiveProject?: Dispatch<SetStateAction<Project | undefined>>;
    expanded?: boolean;
}

function ProjectCard({...props}: ProjectInterface): JSX.Element {
    const SUMMARY_LIMIT = 120;
    const summary = props.expanded ? props.summary : props.summary.substring(0, SUMMARY_LIMIT);

    const imageArray = Array.isArray(props.image) && props.image;
    const image = !Array.isArray(props.image) && props.image;

    return (
        <button
            type="button"
            tabIndex={0}
            onKeyDown={(e) => {
                if ((e.key === 'Space' || e.key === 'Enter') && !props.expanded && props.setActiveProject) {
                    props?.setActiveProject({...props});
                }
            }}
            onClick={() => {
                if (!props.expanded && props.setActiveProject) props.setActiveProject({...props});
            }}
            className={`
                card bg-base-100 shadow-xl overflow-hidden masonry-item w-full h-full cursor-pointer
                ${props.expanded ? 'flex flex-col md:flex-row max-w-[800px]' : ''}
                ${props.large && !props.expanded ? 'flex flex-col md:flex-row col-[span_2]' : 'row-[span_2]'}
            `}
        >
            <figure
                className={`relative bg-cover bg-[center_left_-6rem] rounded-none h-auto ${
                    props.large ?? props.expanded ? 'w-full h-full' : 'min-h-[200px] w-full'
                } ${props.expanded ? 'min-w-[400px]' : ''}`}
            >
                {imageArray ? (
                    <div className="relative h-full w-full">
                        <div className="carousel w-full h-full">
                            {imageArray.map((img) => (
                                <div
                                    id={`item${imageArray.indexOf(img)}`}
                                    className="carousel-item w-full h-full"
                                    key={img.alt}
                                >
                                    {/* Daisy UI uses img rather than Image. */}
                                    {/* eslint-disable-next-line */}
                                    <img className="object-cover h-full w-full" src={img.src} alt={img.alt} />
                                </div>
                            ))}
                        </div>
                        <div className="flex w-full justify-center gap-2 py-2 absolute bottom-2">
                            {imageArray.map((img, i) => (
                                <a href={`#item${i}`} className="h-2 w-2 bg-midnight rounded-full" key={img.alt}>
                                    <p className="sr-only">View image ${i + 1}</p>
                                </a>
                            ))}
                        </div>
                    </div>
                ) : (
                    image && <Image fill className="object-cover h-full w-full" src={image.src} alt={image.alt} />
                )}
            </figure>
            <div className={`card-body text-left py-8 ${props.expanded ? 'max-w-[500px]' : ''}`}>
                <h2 className="card-title tracking-tighter font-bold font-sans flex flex-col gap-3 items-start text-2xl">
                    <span className="">{props.title}</span>
                    {props.active && (
                        <span className="badge bg-emeraldLight text-emeraldDark border-0 font-medium tracking-normal text-xs">
                            Active
                            <span className="relative flex h-1.5 w-1.5 ml-2 items-center justify-center">
                                <span className="motion-safe:animate-ping absolute inline-flex h-full w-full rounded-full bg-emeraldDark opacity-75" />
                                <span className="relative inline-flex rounded-full h-1 w-1 bg-emeraldDark" />
                            </span>
                        </span>
                    )}
                </h2>
                <p className="my-2">
                    {summary}
                    {props.summary.length > SUMMARY_LIMIT && !props.expanded && '...'}
                </p>
                <div className="flex flex-col items-end gap-4 text-sm">
                    {!props.expanded && (
                        <button
                            type="button"
                            className="link m-0 p-0 font-semibold"
                            onClick={() => {
                                if (props.setActiveProject) props?.setActiveProject({...props});
                            }}
                        >
                            Read more
                        </button>
                    )}
                    <div className="card-actions justify-end font-mono font-medium">
                        {props.tags?.map((i) => (
                            <div key={i.toLowerCase()} className="badge badge-outline text-xs flex items-center">
                                {i}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </button>
    );
}

ProjectCard.defaultProps = {
    tags: [],
    large: false,
    active: false,
    setActiveProject: null,
    expanded: false,
};

export default ProjectCard;

import Image from 'next/image';
import type {Dispatch, SetStateAction} from 'react';
import MediaQuery from 'react-responsive';

import type {Project} from './homepage/Projects';

export interface ProjectInterface extends Project {
    setActiveProject?: Dispatch<SetStateAction<Project | undefined>>;
    expanded?: boolean;
    min?: boolean;
}

function ProjectCard({...props}: ProjectInterface): JSX.Element {
    const SUMMARY_LIMIT = 120;
    const summary = props.expanded ? props.summary : props.summary.substring(0, SUMMARY_LIMIT);

    const imageArray = Array.isArray(props.image) && props.image;
    const image = !Array.isArray(props.image) && props.image;

    const figureLg = (props.large ?? props.expanded) && !props.min;

    return (
        // Revisit. A11Y fix needed, interactive items only but changing to button breaks layout.
        // eslint-disable-next-line
        <div
            onClick={() => {
                if (!props.expanded && props.setActiveProject) props.setActiveProject({...props});
            }}
            className={`
                reset card bg-base-100 shadow-xl overflow-hidden masonry-item w-full h-fit md:h-full cursor-pointer max-w-[400px] md:max-w-[800px] mx-auto
                ${props.expanded ? 'flex flex-col md:flex-row max-w-[800px] overflow-y-auto' : ''}
                ${
                    props.large && !props.expanded && !props.min
                        ? 'flex flex-col md:flex-row col-[span_2]'
                        : 'lg:row-[span_2]'
                }
            `}
        >
            <figure
                className={`relative bg-cover bg-[center_left_-6rem] rounded-none min-h-[200px]  ${
                    figureLg ? 'w-full h-full' : 'min-h-[200px] w-full h-auto'
                } ${props.expanded ? 'min-w-[400px] h-auto min-h-[450px]' : 'min-w-[250px]'}`}
            >
                {imageArray ? (
                    <div className="relative h-full w-full min-h-[350px]">
                        <div className="carousel w-full h-full min-h-[350px]">
                            {(props.min ? [imageArray[0]] : imageArray).map((img) => (
                                <div
                                    id={`item${imageArray.indexOf(img)}`}
                                    className="carousel-item w-full h-full min-h-[350px]"
                                    key={img.alt}
                                >
                                    {/* Daisy UI uses img rather than Image. */}
                                    {/* eslint-disable-next-line */}
                                    <img
                                        className="object-cover h-full w-full min-h-[350px]"
                                        src={img.src}
                                        alt={img.alt}
                                    />
                                </div>
                            ))}
                        </div>
                        {!props.min && (
                            <div className="flex w-full justify-center py-2 absolute bottom-2">
                                {imageArray.map((img, i) => (
                                    <a
                                        href={`#item${i}`}
                                        className="p-2 flex items-center justify-center"
                                        key={img.alt}
                                    >
                                        <span className="h-2 w-2 bg-midnight rounded-full" />
                                        <p className="sr-only">View image ${i + 1}</p>
                                    </a>
                                ))}
                            </div>
                        )}
                    </div>
                ) : (
                    image && <Image fill className="object-cover w-full" src={image.src} alt={image.alt} />
                )}
            </figure>
            <div className={`card-body text-left py-8 ${props.expanded ? 'max-w-[500px]' : ''}`}>
                <div className="card-title tracking-tighter font-bold font-sans flex flex-col gap-3 items-start text-2xl">
                    <h2>{props.title}</h2>
                    <div>
                        {props.active && (
                            <span className="badge bg-emeraldLight text-emeraldDark border-0 font-medium tracking-normal text-xs">
                                Active
                                <span className="relative flex h-1.5 w-1.5 ml-2 items-center justify-center">
                                    <span className="motion-safe:animate-ping absolute inline-flex h-full w-full rounded-full bg-emeraldDark opacity-75" />
                                    <span className="relative inline-flex rounded-full h-1 w-1 bg-emeraldDark" />
                                </span>
                            </span>
                        )}
                        {props.linkedWith && props.expanded && (
                            <p className="badge bg-ice text-midnight border-0 py-2 px-4 text-sm font-normal tracking-tight inline">
                                Created at: <strong className="ml-1">{props.linkedWith}</strong>
                            </p>
                        )}
                    </div>
                </div>
                <p className="my-2 h-fit grow-0 mb-4">
                    {summary}
                    {props.summary.length > SUMMARY_LIMIT && !props.expanded && '...'}
                </p>
                <div className="flex flex-col items-end gap-4 text-sm mb-4">
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
                {props.expanded && (
                    <>
                        <div className="flex flex-row gap-4">
                            <button
                                className="btn btn-outline"
                                type="button"
                                onClick={() => {
                                    if (props?.setActiveProject) props?.setActiveProject(undefined);
                                }}
                            >
                                Close
                            </button>
                            {props.link && (
                                <a
                                    href={props.link.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="btn bg-midnight"
                                    type="button"
                                >
                                    {props.link.label}
                                </a>
                            )}
                        </div>
                        <MediaQuery maxHeight="800px">
                            <div className="h-[100px]" />
                        </MediaQuery>
                    </>
                )}
            </div>
        </div>
    );
}

ProjectCard.defaultProps = {
    tags: [],
    large: false,
    active: false,
    setActiveProject: null,
    expanded: false,
    min: false,
};

export default ProjectCard;

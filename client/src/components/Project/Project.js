import React from 'react'

const Project = (props) => {

    let { data } = props

    console.log(data)
    return (
        <div>
            <h3 className="project-name">{data.projectName}</h3>
            <a href={data.projectUrl} target="_blank">
                <img src={data.projectImg} alt={data.projectName}
                    title={data.projectName} />
            </a>
            <a href={data.projectGithub} target="_blank">GitHub Repo</a>
        </div>
    )
}

export default Project
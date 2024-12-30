import '../../index.css';

const ScholarshipList = ({data}: any) => {

    return (
        <>
            {
                data.map((scholarship: any, index: number) => (
                    <div className="card" key={index}>
                        <p><a href={scholarship.url}>{scholarship.name}</a></p>
                        <p>{scholarship.description}</p>
                    </div>
                ))
            }
        </>
    )
}

export default ScholarshipList
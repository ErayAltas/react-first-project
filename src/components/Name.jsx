const mapData = [
    {
        id: 1,
        name: 'eray',
        job: 'eng'
    },
    {
        id: 2,
        name: 'osman',
        job: 'dentist'
    },
]

const txt = ({ data }) => {
    return (
        <div>Benim adim {data}
            {
                mapData.array.forEach(element => {
                    <div>{element.name}</div>
                })
            }

        </div>

    )
}

export default txt;
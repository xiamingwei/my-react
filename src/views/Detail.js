import React from 'react'

const Details = ['春天', '夏天', '秋天', '冬天']

class Detail extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            season: ''
        }
    }

    chooseSeason = (season) => {
        this.setState({
            season: season
        })
    }

    render() { 
        let details = Details.map(detail => {
            return <span key={detail} style={{'paddingLeft': '10px'}} onClick={ () => {this.chooseSeason(detail)}}>{detail}</span>
        })

        return (
            <div>
                <p>{details}</p>
                <p>{this.state.season}</p>
            </div>
        )
    }
}

export default Detail
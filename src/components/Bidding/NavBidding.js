import React, { Component } from 'react'
import Countdown from 'react-count-down'
import { Divider } from 'semantic-ui-react'
import { Head, Nav } from './styled'
class Bidding extends Component {
  constructor() {
    super()
  }

  render() {
    const cb = () => {
      console.log('expired callback')
    }
    const OPTIONS = {
      endDate: '03/01/2018 10:55 AM',
      prefix: 'until my birthday!',
      cb,
    }

    return (
      <div className="Bidding">
        <div className="row">
          <div className="large-12 columns">
            <Head> การเสนอราคาประมูล </Head>
            <Divider />
          </div>
        </div>
        <div className='row'>
            <div className='large-4 columns'>
                <Nav>
                rdgdg
                </Nav>
            </div>
            <div className='large-4 columns'>
                <Nav>
                dfgdg
                </Nav>
            </div>
            <div className='large-4 columns'>
                <Nav>
                dfggd
                </Nav>
            </div>
        </div>
      </div>


    )
  }
}

export default Bidding
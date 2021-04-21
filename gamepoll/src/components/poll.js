import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import { Input, Button } from 'semantic-ui-react'

class CreatePoll extends React.Component {
    render() {
        return (

            <div className="create-wrapper">
                <div id="create-options">
                    <ul>
                        <Input placeholder="Option..." />
                        <Input placeholder="Option..." />
                        <Input placeholder="Option..." />

                    </ul>
                </div>
                <Button primary>Add option</Button>
            </div>

        )
    }
}

export default CreatePoll;
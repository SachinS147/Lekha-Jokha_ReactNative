import React, {Component} from 'react';
import {Card, CardSection, Input, Button} from './common/CustomIndex';
// import {Text} from 'react-native';
// import {Button as Button1}  from './common/Button';

class LoginForm extends Component{

    render(){
        return(
            <Card>
                <CardSection>
                    <Input label="Email" placeholderProp = "email@gmail.com"/>
                </CardSection>

                <CardSection>
                    <Input secureTextEntryProp label="Password" placeholderProp = "password"/>
                </CardSection>
                <CardSection>
                    <Button id="demo1" color="default">
                            default
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

export default LoginForm;
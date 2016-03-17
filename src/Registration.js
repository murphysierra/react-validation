var React = require('react');
var Validation = require('./../build');
var MaskedInput = require('react-maskedinput');

var Registration = React.createClass({
    render: function() {
        return (
            <Validation.Form ref='form'>
                <h2>Registration form</h2>
                <Validation.Input className='ui-input' placeholder='firstname' name='firstname' validations={[
                        {
                            rule: 'isRequired'
                        },
                        {
                            rule: 'isAlpha'
                        }
                    ]} />
                <Validation.Input className='ui-input' placeholder='lastname' name='lastname' validations={[
                        {
                            rule: 'isRequired'
                        },
                        {
                            rule: 'isAlpha'
                        }
                    ]} />
                <Validation.Input className='ui-input' placeholder='email' name='email' validations={[
                        {
                            rule: 'isRequired'
                        },
                        {
                            rule: 'isEmail'
                        }
                    ]} />
                <Validation.Input className='ui-input' wrapper={{component: MaskedInput, props: {mask: '11/11/1111'}}} name='birthday' onChange={function(event) {console.log(event.target.value)}} validations={[
                        {
                            rule: 'isRequired'
                        }
                    ]} />
                <label>
                    * I accept the policy
                    <Validation.Input className='ui-input' name='policy' value='true' type='checkbox' validations={[
                        {
                            rule: 'isRequired'
                        }
                    ]} />
                </label>
                <Validation.Select className='ui-select' name='city' validations={[{rule: 'isRequired'}]}>
                    <option value=''>Choose your City</option>
                    <option value='Kyiv'>Kyiv</option>
                    <option value='London'>London</option>
                </Validation.Select>
                <Validation.Input className='ui-input' placeholder='password' ref='password' type='password' name='password' validations={[
                        {
                            rule: 'isRequired'
                        },
                        {
                            rule: 'isEqualToNamedInput',
                            name: 'password-confirm'
                        }
                    ]} />
                <Validation.Input className='ui-input' placeholder='password confirmation' ref='passwordConfirm' type='password' name='password-confirm' validations={[
                        {
                            rule: 'isRequired'
                        },
                        {
                            rule: 'isEqualToNamedInput',
                            name: 'password'
                        }
                    ]} />
                <br/>
                <Validation.Button type='submit' value='complete registration' />
            </Validation.Form>
        );
    }
});

module.exports = Registration;
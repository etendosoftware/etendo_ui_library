import React from 'react';
import renderer from 'react-test-renderer';
import Input from './Input';



describe('Running Test for Input', () => {

  it('Check Input Error', () => {
  
    const tree = renderer
      .create(
        <Input 
        titleLabel='Test'
        helperText='Only characters'
        placeholder='Write a password'
        disabled={false}
        value='Render Test'
        onPress={()=> {console.log('Press Field')}}
        onChangeText={(text)=>console.log(text)}
        onFocus={()=> {console.log('On Focus')}}
        onBlur={()=> {console.log('On Blur')}}
        typeField='searchTextInput'
        isError={true}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
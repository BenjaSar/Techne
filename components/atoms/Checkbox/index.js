import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from "react";
import { styles } from './styles';
import {CheckBox, Icon} from 'react-native-elements'

const Checkbox= () =>{(setSelectedItem)
    
    const [isSelected, setSelectedItem] = useState(false);

    return(
    <TouchableOpacity styles= {isSelected ? styles.checked: styles.unChecked}>
        {isSelected && <Icon name = "check" type="ionicon" size={12} color = '#FAFAFA'/>}
    </TouchableOpacity>

)}

export default Checkbox;
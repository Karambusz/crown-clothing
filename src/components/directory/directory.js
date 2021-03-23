import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {selectDirectorySections} from '../../redux/directory/directory.selectors';
import MenuItem from '../menu-item';

import {DirectoryMenuContainer} from './directory.styles';

const Directory = ({sections}) => {
	return (
		<DirectoryMenuContainer>
		{
			sections.map(({id, ...sectionProps}) => {
			return <MenuItem 
				key={id}
				{...sectionProps}
				/>
			})
		}
		</DirectoryMenuContainer>
	) 
}

const mapStateToProps = createStructuredSelector({
	sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory);
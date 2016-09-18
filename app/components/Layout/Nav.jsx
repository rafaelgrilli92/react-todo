var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = (props) => {
	return (
		<div className="top-bar">
		  <div className="top-bar-left">
		    <ul className="menu">
		     	<li className="menu-text">Project Name</li>
		        <li><IndexLink to="/" activeClassName="active">Index</IndexLink></li>
				<li><Link to="/link2" activeClassName="active">Link 2</Link></li>
		    </ul>
		  </div>
		   <div className="top-bar-right">
		   		
		   </div>
		</div>
	);
}

module.exports = Nav;
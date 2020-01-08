import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
//import Button from "@material-ui/core/Button";
import InputBase from "@material-ui/core/InputBase";
import { fade, makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import Grid from '@material-ui/core/Grid'

import MergeButton from './LabelDefinition';

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
	},
	mergeButton: {
		margin: theme.spacing(1),
		
		// background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
		// border: 0,
		// borderRadius: 3,
		// boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
		// color: 'white',
		// height: 48,
		// padding: '0 30px',
	},
	menuButton: {
		marginRight: theme.spacing(2)
	},
	title: {
		flexGrow: 1,
		display: "none",
		[theme.breakpoints.up("sm")]: {
			display: "block"
		}
	},
	search: {
		margin: theme.spacing(1),
		position: "relative",
		borderRadius: theme.shape.borderRadius,
		backgroundColor: fade(theme.palette.common.white, 0.15),
		"&:hover": {
			backgroundColor: fade(theme.palette.common.white, 0.25)
		},
		[theme.breakpoints.up("sm")]: {
			marginLeft: theme.spacing(1),
			width: "auto"
		}
	},
	searchIcon: {
		width: theme.spacing(7),
		height: "100%",
		position: "absolute",
		pointerEvents: "none",
		display: "flex",
		alignItems: "center",
		justifyContent: "center"
	},
	inputRoot: {
		color: "inherit"
	},
	inputInput: {
		padding: theme.spacing(1, 1, 1, 7),
		transition: theme.transitions.create("width"),
		width: "100%",
		[theme.breakpoints.up("sm")]: {
			width: 120,
			"&:focus": {
				width: 200
			}
		}
	}
}));

export default function SearchAppBar() {
	const classes = useStyles();
	
	return (
		<div className={classes.root}>
		<AppBar position="static">
			<Toolbar> 
				<Grid
					justify="space-between" // Add it here :)
					container 
					spacing={24}
				>
					<Grid item>
						<MergeButton />
					</Grid>
					<Grid item>
						<div className={classes.search}>
						<div className={classes.searchIcon}>
						<SearchIcon />
						</div>
						<InputBase
							placeholder="Search…"
							classes={{
								root: classes.inputRoot,
								input: classes.inputInput
							}}
							inputProps={{ "aria-label": "search" }}
						/>
						</div>
					</Grid>
				</Grid>
			</Toolbar>
		</AppBar>
		</div>
		);
	}
	
/* eslint-disable indent */
/* eslint-disable no-tabs */
import classNames from '../assets/styles/footer.styl'

export default {
	data () {
		return {
			author: 'masterjediYYF'
		}
	},
	render () {
		return (
			<div id={classNames.footer}>
				<span>written by {this.author}</span>
			</div>
		)
	}
}

123123123ion ButtonGroupItem(props: { button: API.ModuleView.ExtraElements }) {
	const { button } = props
	const { appId, moduleId } = useOutsofts()

	const [visible, setVisible] = React.useState(false)
	const showMoreButton = () => setVisible(true)
	const handleCloseMore = () => setVisible(false)

	const { title } = useButtonEvents({
		viewInfo: { appId, moduleId, orgId: 1 },
		// rowIndex,
		title: button.title,
		extraProperty: button.extraProperty
	})

	return (
		<>
			<div className='text-sm text-blue-500 py-1 px-2' onClick={showMoreButton}>
				{title || button.title}
			</div>
			<EventButtonPopup
				title='更多批量按钮'
				buttons={[button]}
				visible={visible}
				onClose={handleCloseMore}
			/>
		</>
	)
}

interface MoreButtonItemProps {
	buttons?: API.ModuleView.ExtraElements[]
}

function MoreButtonItem(props: MoreButtonItemProps) {
	const { buttons } = props

	const [visible, setVisible] = React.useState(false)

	const showMoreButton = () => setVisible(true)
	const handleCloseMore = () => setVisible(false)

	return (
		<>
			<div className='text-sm text-blue-500 py-1 px-2' onClick={showMoreButton}>
				更多
			</div>
			<EventButtonPopup
				title='更多批量按钮'
				buttons={buttons}
				visible={visible}
				onClose={handleCloseMore}
			/>
		</>
	)
}

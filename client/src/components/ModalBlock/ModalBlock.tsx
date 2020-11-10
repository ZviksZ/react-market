import React from 'react'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import s from './ModalBlock.module.scss'

interface ModalBlockProps {
	title?: string
	children: React.ReactNode
	visible?: boolean
	fullWidth?: boolean
	onClose: () => void
}

export const ModalBlock: React.FC<ModalBlockProps> = ({ title, onClose, fullWidth = true, visible = false, children }: ModalBlockProps): React.ReactElement | null => {
	if (!visible) {
		return null
	}

	return (
		<Dialog fullWidth={fullWidth}
						maxWidth={'sm'}
						open={visible}
						onClose={onClose}
						scroll={'body'}
						aria-labelledby="form-dialog-title" className={s.dialog}>
			<DialogTitle id="form-dialog-title">
				<div className={s.dialogHeader}>
					<span>{title}</span>
					<IconButton onClick={onClose} className={s.dialogHeaderCloseBtn} color="secondary" aria-label="close">
						<CloseIcon style={{ fontSize: 26 }} color="primary" className={s.dialogHeaderClose}/>
					</IconButton>
				</div>
			</DialogTitle>
			<DialogContent dividers className={s.dialogContent}>{children}</DialogContent>
		</Dialog>
	)
}

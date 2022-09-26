import isInDom from './is-in-dom'

export default function hasParent(element, root) {
	return root && root.contains(element) && isInDom(element)
}

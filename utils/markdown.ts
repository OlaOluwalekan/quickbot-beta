import { visit } from 'unist-util-visit'

export default function remarkAnnotateFollowedByList() {
  return (tree: any) => {
    visit(tree, 'paragraph', (node: any, index: any, parent: any) => {
      if (parent && index < parent.children.length - 1) {
        const nextNode = parent.children[index + 1]
        if (nextNode.type === 'list') {
          node.data = { isFollowedByList: true }
        }
      }
    })
  }
}

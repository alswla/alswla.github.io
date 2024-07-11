import * as C from "./Category.styles"

type CategoryProps = {
  categories: Record<string, number>
  selectedCategory: string
  handleSelect: (category: string) => void
}

export default function Category({
  categories,
  selectedCategory,
  handleSelect,
}: CategoryProps) {
  return (
    <C.Wrapper>
      {Object.entries(categories).map(([category, count]) => (
        <C.Item
          onClick={() => handleSelect(category)}
          $selected={selectedCategory === category}
          key={category}
        >
          #{category}({count})
        </C.Item>
      ))}
    </C.Wrapper>
  )
}

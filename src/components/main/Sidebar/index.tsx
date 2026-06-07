import * as S from "./Sidebar.styles"

type SidebarProps = {
  categories: Record<string, number>
  selectedCategory: string
}

export default function Sidebar({ categories, selectedCategory }: SidebarProps) {
  const entries = Object.entries(categories)

  return (
    <S.Wrapper>
      <S.Heading>태그</S.Heading>
      <S.TagList>
        {entries.map(([name, count]) => {
          const isSelected = selectedCategory === name
          const href = name === "All" ? "/" : `/?category=${encodeURIComponent(name)}`

          return (
            <S.TagItem key={name} $selected={isSelected}>
              <S.Link to={href}>
                {name}
                <S.Count>({count})</S.Count>
              </S.Link>
            </S.TagItem>
          )
        })}
      </S.TagList>
    </S.Wrapper>
  )
}

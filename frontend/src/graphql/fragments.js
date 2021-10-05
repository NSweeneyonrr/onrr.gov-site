import { gql } from '@apollo/client'

export const contentBlocks = gql`
  fragment contentBlocks on content_blocks {
    content
  }
`

export const blockFields = gql`
  fragment blockFields on blocks {
    id
    block_label
    block_type
    block_layout
    block_content_column_one
    block_content_column_two
    block_content_column_three
    tab_items
    nested_tab_items
  }
`

export const sectionHeadingBlocks = gql`
  fragment sectionHeadingBlocks on section_heading_blocks {
    section_heading
    section_heading_type
  }
`

export const tabBlocksContents = gql`
  fragment tabBlocksContents on tab_blocks_contents {
    tab_label
    tab_blocks {
      item {
        ... on section_heading_blocks {
          section_heading
          section_heading_type
        }
        ... on content_blocks {
          content
        }
        ... on tab_blocks {
          tab_block {
            item {
              ... on tab_blocks_contents {
                tab_label
                tab_blocks {
                  item {
                    ... on section_heading_blocks {
                      section_heading
                      section_heading_type
                    }
                    ... on content_blocks {
                      content
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`

export const pageFields = gql`
 ${blockFields}
  fragment pageFields on pages {
    id
    title
    slug
    hero_image {
      id
    }
    page_blocks {
      id
      item {
        __typename
        ...blockFields
      }
    }
    # page_builder
    meta_title
    meta_description
  }
`

export const cardBlocks = gql`
  ${contentBlocks}
  fragment cardBlocks on card_blocks {
    card_title
    card_subtitle
    card_content_block {
      item {
        __typename
        ...contentBlocks
      }
    }
  }
`

export const tabBlocks = gql`
  ${tabBlocksContents}
  fragment tabBlocks on tab_blocks {
    __typename
    id
    block_label
    tab_block {
      item {
        __typename
        ...tabBlocksContents
      }
    }
  }
`

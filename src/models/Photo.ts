export interface Photo {
    alt_description: null | string
    blur_hash: string
    categories: []
    color: string
    created_at: Date
    current_user_collections: []
    description: null | string
    height: number
    id: string
    liked_by_user: boolean
    likes: number
    links: {
        download: string
        download_location: string
        html: string
        self: string
    }
    promoted_at: null | string
    sponsorship: { impression_urls: any[], tagline: string, tagline_url: string, sponsor: any }
    topic_submissions: {}
    updated_at: Date
    urls: {
        raw: string, full: string,
        regular: string,
        small: string,
        thumb: string
    }
    user: { id: string, updated_at: Date, username: string, name: string, first_name: string }
    width: number
}

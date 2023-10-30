import { GraphQLClient } from "graphql-request"
export function request({
  query,
  variables,
  includeDrafts,
  excludeInvalid,
}: any) {
  const headers: any = {
    authorization: `Bearer ${process.env.NEXT_DATOCMS_API_TOKEN}`,
  }
  if (includeDrafts) {
    headers["X-Include-Drafts"] = "false"
  }
  if (excludeInvalid) {
    headers["X-Exclude-Invalid"] = "true"
  }
  const client = new GraphQLClient("https://graphql.datocms.com", { headers })

  return client.request(query, variables)
}

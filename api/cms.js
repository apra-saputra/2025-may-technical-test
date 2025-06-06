import { apiClient } from "./client.js";
import { HTTP_STATUS } from "./helpers/httpStatus.js";
import { sendResponse } from "./helpers/sendResponse.js";

/**
 * TASK: use `apiClient` to fetch list of diary content
 *
 * @example
 * `GET /cms/diary?id=359007&id=358317&id=343275&status=posted`
 *
 * Note that:
 * - `status` param must exist and have value of `'posted'`
 */
export async function getDiaryFeed(req, res) {
  const ids = [
    359007, 358317, 343275, 342861, 342723, 342240, 341343, 296907, 253782,
    177123,
  ];

  const params = ids.map((id) => `id=${id}`).join("&");

  const queryString = `?${params}&status=posted`;

  // https://project-tempest-hiring.up.railway.app/cms/diary?id=358317&id=343275&id=342861&id=342723&id=342240&id=341343&id=296907&id=253782&id=177123&id=359007&status=posted
  // https://project-tempest-hiring.up.railway.app/cms/dairy?id=359007&id=358317&id=343275&id=342861&id=342723&id=342240&id=341343&id=296907&id=253782&id=177123&status=posted
  try {
    const data = await apiClient(`cms/diary${queryString}`);
    return sendResponse(res, HTTP_STATUS.OK, { ...data });
  } catch (error) {
    console.log(error);
    return sendResponse(res, HTTP_STATUS.INTERNAL_SERVER_ERROR, { error });
  }
}

/**
 * TASK: use `apiClient` to fetch diary content by id
 *
 * @example
 * `GET /cms/diary?id=359007&status=posted`
 *
 * Note that:
 * - `status` param must exist and have value of `'posted'`
 */
export async function getDiaryContentById(req, res) {
  const id = req.params.id;
  const url = `cms/diary?id=${id}&status=posted`;

  try {
    const data = await apiClient(url);
    return sendResponse(res, HTTP_STATUS.OK, { ...data.content[0] });
  } catch (error) {
    return sendResponse(res, HTTP_STATUS.INTERNAL_SERVER_ERROR, { error });
  }
}

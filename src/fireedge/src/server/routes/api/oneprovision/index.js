/* ------------------------------------------------------------------------- *
 * Copyright 2002-2021, OpenNebula Project, OpenNebula Systems               *
 *                                                                           *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may   *
 * not use this file except in compliance with the License. You may obtain   *
 * a copy of the License at                                                  *
 *                                                                           *
 * http://www.apache.org/licenses/LICENSE-2.0                                *
 *                                                                           *
 * Unless required by applicable law or agreed to in writing, software       *
 * distributed under the License is distributed on an "AS IS" BASIS,         *
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.  *
 * See the License for the specific language governing permissions and       *
 * limitations under the License.                                            *
 * ------------------------------------------------------------------------- */

const { setApiRoutes } = require('server/utils/server')
const {
  routes: provisionRoutes,
} = require('server/routes/api/oneprovision/provision')
const {
  routes: provisionTemplateRoutes,
} = require('server/routes/api/oneprovision/template')
const {
  routes: providerRoutes,
} = require('server/routes/api/oneprovision/provider')

const {
  PROVIDER,
  PROVISION,
  PROVISION_TEMPLATE,
} = require('server/routes/api/oneprovision/string-routes')

/**
 * Add routes.
 *
 * @returns {Array} routes
 */
const generatePrivateRoutes = () => [
  ...setApiRoutes(provisionRoutes, PROVISION),
  ...setApiRoutes(provisionTemplateRoutes, PROVISION_TEMPLATE),
  ...setApiRoutes(providerRoutes, PROVIDER),
]

const functionRoutes = {
  private: generatePrivateRoutes(),
  public: [],
}

module.exports = functionRoutes

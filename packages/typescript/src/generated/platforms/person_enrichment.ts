// Generated - do not edit. Regenerate with: pnpm generate

import type {
  ClientCore,
  RequestOptions,
  RunResult,
} from "../../core/index.js";

/**
 * Input for Person Enrichment - Aviato (person_enrichment.aviato).
 */
export interface PersonEnrichmentAviatoInput {
  angelListID?: string;
  crunchbaseID?: string;
  /**
   * Format: email.
   */
  email?: string;
  id?: string;
  linkedinEntityId?: string;
  linkedinID?: string;
  /**
   * Format: uri.
   */
  linkedinURL?: string;
  polyworkID?: string;
  require?: string[];
  signalNfxID?: string;
  twitterID?: string;
}

/**
 * The `data` payload of Person Enrichment - Aviato (person_enrichment.aviato).
 */
export interface PersonEnrichmentAviatoData {
  about?: string;
  firstName?: string;
  headline?: string;
  lastName?: string;
  linkedinUrl?: string;
  location?: string;
  name: string;
  [extra: string]: unknown;
}

/**
 * Typed methods for the person_enrichment platform. Attached to the AnyAPI client as
 * `client.personEnrichment`.
 */
export class PersonEnrichmentNamespace {
  constructor(private readonly _core: ClientCore) {}

  /**
   * Person Enrichment - Aviato
   *
   * Enrich a person from an Aviato or LinkedIn identifier, LinkedIn URL, or email.
   *
   * Price: $0.084 per request.
   */
  aviato(
    input: PersonEnrichmentAviatoInput,
    options?: RequestOptions,
  ): Promise<RunResult<PersonEnrichmentAviatoData>> {
    return this._core.run("person_enrichment.aviato", input, options);
  }
}
